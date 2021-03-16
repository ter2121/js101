const readline = require('readline-sync');
const MESSAGES = require('./mortgageCalcBonusMSG.json');

// Adds a check for commas which were causing problems
function invalidInput(number) {
  return number.includes(',') ||
         number.trim() === '' ||
         Number(number) < 0   ||
         Number.isNaN(Number(number));
}

function prompt (message) {
  console.log(`=> ${message}`);
}

prompt(MESSAGES['welcome']);

while (true) {
  let loanAmount = readline.question(MESSAGES['loanAmount']);
  while (invalidInput(loanAmount)) {
    prompt(MESSAGES['loanAmountVerification']);
    loanAmount = readline.question();
  }

  prompt(MESSAGES['APR']);
  let annualInterestRate = readline.question();
  let monthlyInterestRate = annualInterestRate / 12;
  while (invalidInput(annualInterestRate)) {
    console.log(MESSAGES['annualInterestRateVerification']);
    annualInterestRate = readline.question();
  }

  prompt(MESSAGES['loanDurationYears']);
  let loanDurationYears = readline.question();
  let loanDurationMonths = loanDurationYears * 12;
  while (invalidInput(loanDurationYears)) {
    prompt(MESSAGES['loanDurationYears']);
    loanDurationYears = readline.question();
  }

  // Had to put this on multiple lines to satisfy 80 char rule
  let monthlyPayment =
    loanAmount * (monthlyInterestRate /
      (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationMonths))));

  console.log(`Your monthly payment is $${monthlyPayment.toFixed(2)}.`);

  prompt(MESSAGES['doAgain']);
  let answer = readline.question();

  if (answer[0].toLowerCase() !== 'y') break;

}


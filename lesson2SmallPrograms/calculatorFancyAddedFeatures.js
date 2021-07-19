const readline = require('readline-sync');

function prompt (message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

// using array rather than JSON for config file
let config = ['Welcome to Calculator!',"What's the first number?","What's the second number?",'What operation would you like to perform? 1) Add 2) Subtract 3) Multiply 4) Divide', "Hmm... that doesn't look like a valid number.", 'Must choose 1, 2, 3 or 4', 'Would you like to do another calculation. Press `n` for NO or `y` for YES.']

prompt(config[0]);
let a = 'y' 

while (a !== 'n') {
  prompt(config[1]);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(config[4]);
    number1 = readline.question();
  }

  prompt(config[2]);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(config[4]);
    number2 = readline.question();
  }

  prompt(config[3]);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(config[5]);
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  console.log(`The result is: ${output}`);

  prompt(config[6]);
  a = readline.question();
}

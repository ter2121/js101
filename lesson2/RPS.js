const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if ((choice === 'rock' && computerChoice === 'scissors') ||
    (choice === 'paper' && computerChoice === 'rock') ||
    (choice === 'scissors' && computerChoice === 'paper')) {
    prompt('You win!');
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
    (choice === 'paper' && computerChoice === 'scissors') ||
    (choice === 'scissors' && computerChoice === 'rock')) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie!");
  }
}

// Consider Q1: PROMPT CAN BE PLACED ABOVE OR BELOW displayWinner b/c function declarations (not expressions) are hoisted
function prompt(message) {
  console.log(`=> ${message}`);
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  console.log(randomIndex);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}

/* Consider 03: Math.round() vs Math.floor() * Math.random()
From Stack Exchange
Math.floor(Math.random() * 3). Here, 0-0.999999 will give you 0, 1.0 to 1.999999 will give you 1, and 2.0 to 2.999999 will give you 2. Every number has a 33% chance of being the result.

Math.round(Math.random() * 2). Here, 0-0.499999 will give you 0, 0.5 to 1.499999 will give you 1, and 1.5 to 1.999999 will give you 2. Note that the range of numbers that lead to a 1 is twice as big as those that lead to 0 or 1. That is 25% chance of 0, 50% chance of 1, and 25% chance of 2.
*/


/* Consider 04: Alternate for while(true) loop:

let answer = '';

while (answer.toLowerCase() !== 'n') {
  --omitted code--
  prompt("Please enter 'y' or 'n'.");
  let answer = readline.question();
}

*/
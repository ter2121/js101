const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
let userScore = 0
let computerScore = 0

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayGameWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper') ||
      (choice === 'lizard' && computerChoice === 'paper') ||
      (choice === 'lizard' && computerChoice === 'spock') ||
      (choice === 'spock' && computerChoice === 'scissors') ||
      (choice === 'spock' && computerChoice === 'rock') ){ 
    prompt('You win!');
    matchScoreTotal(1);
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
             (choice === 'paper' && computerChoice === 'scissors') ||
             (choice === 'scissors' && computerChoice === 'rock') ||
             (choice === 'spock' && computerChoice === 'paper') ||
             (choice === 'spock' && computerChoice === 'lizard') ||
             (choice === 'lizard' && computerChoice === 'scissors') ||
             (choice === 'lizard' && computerChoice === 'rock')){
    prompt('Computer wins!');
    matchScoreTotal(2);
  } else {
    prompt("It's a tie!");
    matchScoreTotal(3);
  }
}

function matchScoreTotal(result){
  switch (result){
    case 1:
      userScore += 1;
      break;
    case 2: 
      computerScore += 1;
      break;
    case 3: 
      userScore += 1;
      computerScore += 1;
      break;
  }
  console.log(`The score is ${userScore} to ${computerScore}.`);
}

function matchOver(userScoreTotal, computerScoreTotal) {
  if (userScoreTotal === 5) {
    console.log(`Match over. You have won ${userScoreTotal} games.`)
    userScore = 0;
    computerScore = 0;
  } else if (computerScoreTotal === 5) {
    console.log(`Match over. The computer has won ${computerScoreTotal} games.`);
    userScore = 0;
    computerScore = 0;
  }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayGameWinner(choice, computerChoice);
  matchOver(userScore, computerScore);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;

  matchScoreTotal();
}
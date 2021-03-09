let readlineSync = require('readline-sync');
let choice = readlineSync.question("Would you like to add (press 'a') or multiply (press 'm') consecutive integers? \n");
let num = parseInt(readlineSync.question("Pick an integer greater than 0 \n"));


function conInt (num, choice) {
  if(typeof num === 'number' && num > 0)
  switch (choice) {
    case 'a':
      let addTotal = 0
      for (let i=1; i<= num; i++) {
        addTotal += i
        console.log(addTotal)
      }
      break
    case 'm':
      let multiplyTotal = 1
      for (let i=1; i<= num; i++) {
        multiplyTotal *= i
        console.log(multiplyTotal)
      }
      break
    default:
      console.log('Not an option. Please press "a" or "m".')
  } else {console.log('You must enter an integer greater than 0')}
}

conInt(num, choice)










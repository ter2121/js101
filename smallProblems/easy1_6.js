let readlineSync = require('readline-sync');
let num = readlineSync.question("what is your number (it must be greater than 0) \n");
let choice = readlineSync.question("add (press 'a') or multiply (press 'm') \n");

function conInt (num, choice) {
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
      console.log('not an option')
  }
}

conInt(num, choice)










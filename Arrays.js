/*
1. We generated parts of a passcode and now want to combine them into a string. 
2. Write some code that returns a string, with each portion of the passcode separated by a hyphen (-).

let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'
*/


let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];























/*
Solution

passcode.join('-'); // '11-jZ5-hQ3f*-8!7g3-p3Fs'

OR we could build the target string step by step, iterating over the passcode list like this:

let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];
let joinedPasscode = '';

for (let i = 0; i < passcode.length; i += 1) {
  if (i > 0) {
    joinedPasscode += '-';
  }

  joinedPasscode += passcode[i];
}

console.log(joinedPasscode); // '11-jZ5-hQ3f*-8!7g3-p3Fs'

The main difference between both solutions is that Array.prototype.join() provides a higher level of abstraction: it hides the iteration and string building behind a simple method call. This makes it easier to see at one glance what the solution code does with passcode.
*/
let nameNorm = 'Thomas Edison';
let screamName = 'Tommy Edison!';

function greetUser (name) {
  if (name.includes('!')) {
    console.log(`WHY ARE WE SCREAMING?`);
  } else {
    console.log(`Hello ${name}.`);
  }
}

greetUser(nameNorm);
greetUser(screamName);

// Edge Cases using these all don't solve an exclamation elsewhere.
        // String.includes(`!`)
        // nameArray[-1]
        // String.endsWith('!')


// p 
//   input 
//     Name of User 
//   output
//     Greeting
//     Yell
// D
//   String input 
//   String output 
// A 
//   if String.includes(!)
//   else 



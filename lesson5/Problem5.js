/*

#### NB: Practice Problem 5: I initially tried to access using ['personKey'] but forgot it was a variable
not a hardcoded string so it returned undefined.

compute and display ages of male members of family
let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};
*/

// let munsters = {
//   Herman: { age: 32, gender: 'male' },
//   Lily: { age: 30, gender: 'female' },
//   Grandpa: { age: 402, gender: 'male' },
//   Eddie: { age: 10, gender: 'male' },
//   Marilyn: { age: 23, gender: 'female'}
// };

// let ageTotal = 0
// for (let personKey in munsters) {
//   if (munsters[personKey].gender === 'male'){
//     ageTotal += munsters[personKey].age
//   }
// }

// console.log(ageTotal)

/*
ALTERNATE
*/

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let munstersValues = Object.values(munsters)
let ageMaleTotal = 0
  // returrns array of 5 objects

for (let i=0; i < munstersValues.length; i++) {
  if (munstersValues[i].gender === 'male') {
    ageMaleTotal += munstersValues[i].age 
  }
}

console.log (ageMaleTotal)

// Q2
// let str1 = 'tommy!';
// let str2 = 'boy?';

// function TRY (input) {
//   if (input.substring(input.length-1) === '!'){
//     console.log(`${input} says !`)
//   }
// }

// TRY(str1);
// TRY(str2);

// Q3
// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
// let cool = Object.keys(ages)
// console.log(cool.includes('Spot'))

//Q4
// let munstersDescription = "the Munsters are CREEPY and Spooky.";
// // => The munsters are creepy and spooky.
// let answer =  munstersDescription.charAt(0).toUpperCase() + munstersDescription.substring(1).toLowerCase()
// console.log(answer)

//Q6

// let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
// let additionalAges = { Marilyn: 22, Spot: 237 };


// returnedTarget = Object.assign(ages, additionalAges)
// console.log(returnedTarget)

//Q10
let advice = "Few things in life are as important as house training your pet dinosaur.";

console.log(advice.slice(0, advice.indexOf('house')))
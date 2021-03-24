// Q1 & Q1Bonus
// let advice = "Few things in life are as important as house training your pet dinosaur who is important but sometimes more urgent is more important is fun.";

// while (advice.includes('important')) {
//   advice = advice.replace('important','urgent')
//   console.log(advice)
// }

//Q2
// numbers = [1, 2, 3, 4, 5];
// funny = numbers.slice()
// funny.reverse()
// console.log(numbers)
// console.log(funny)

// numbers = [1, 2, 3, 4, 5];
// funny = numbers.sort((num1, num2) => num2 - num1)
// # numbers.sort(comparisonFunction(a,b)) 
// # Evaluates a, b 
// # If return value < 0, leave unchanged 
// # If return value > 0 sort b before a
// # If return value = 0 sort the two in relationship to others
// # numbers.sort((num1,num2) => num2 - num1);
// # This creates ascending [1,2,3,4,5]

// Extra Credit 
// let numbers = [1, 2, 3, 4, 5];
// let newNumbers = [];
// numbers.forEach(number => {
//   newNumbers.unshift(number)
// });
// console.log(newNumbers)

// Q3
// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

// let number1 = 8;  // false
// let number2 = 95; // true
// console.log(numbers.includes(number1))
// console.log(numbers.includes(number2))

//Q5
// let array = [1, 2, 3, 4, 5];
// array.splice(2,1)
// console.log(array)

// ## RETURN value of .splice is the DELETED elements 

//Q6
//THE TRICK IN ALL CASES IS TO START WITH AN EMPTY ARRAY, and CALL CONCAT METHOD ON THAT

// let flintstones = ["Fred", "Wilma"];

// // flintstones.push(["Barney", "Betty"]);
// // flintstones.push(["Bambam", "Pebbles"]);

// let newArray = flintstones.concat(["Barney", "Betty"],["Bambam", "Pebbles"])
// console.log(newArray);

// // REDUCE: basically, always 2 parts:
//           .reduce(CALLBACK(4 args), initValue)
//           CALLBACK often written as an arrow function
//           CALLBACK 4 parameters (accumulator, current value,...)
                    // accumulator
                    // currentValue
//                  OPTIONAL index
//                  OPTIONAL array
            // initValue is first arg used for CALLBACK
            //   default is make init the accumulator, start @ index 1

// //Q7
// let flinstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
// console.log(Object.entries(flinstones).filter(pair => pair[0] === "Barney").shift())

// .shift()
    // RETURNS removed Element
    // MUTATES original Array
    // used here to avoid a [[Barney:2]] double array 


// //Q8
// let numbers = [1, 2, 3, 4]; // true
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
// console.log(Array.isArray(numbers))
// console.log(Array.isArray(table))

//Q10
// let statement1 = "The Flintstones Rock!";
// let statement2 = "Easy come, easy go.";

// let newArray = statement1.split('').filter(element => element === 't').length
// console.log(newArray)
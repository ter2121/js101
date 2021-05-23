/*
Sum Of Digits

Write a function that takes one argument, 
a positive integer, and returns the sum 
of its digits. 

Do this without using for, while, or 
do...while loops - instead, use a series 
of method calls to perform the sum.


Pseudocode
DS 
in Number
out Number

Rules
Explicit
    - input is a positive integer
    - Can't use for, while or do..while loops 
Implicit
    - you can use higher order functions 
     
Algorithm
 - declare variable for input (done)
 - convert input to string (done)
 - create array of string digits (done)
 - declare resultString and initialize to 0 (zero) 
 - traverse over array 
    for each element, add to result string
- convert to string from array
- convert result string to Number 
- return Number 
*/

// number -> number
// function sum (input){
//   let stringInput = String(input);
//   let stringDigitArray = stringInput.split("") // 
//   let resultString = ''
//   let resultString = numberArray.reduce((acc,curr) => {
//     return acc + curr
//   })
//   return resultNumber
  
// }


// console.log(sum(23));           // 5
// console.log(sum(496));          // 19
// console.log(sum(123456789));    // 45

// const NUMBER_NAMES = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]; 

// cool = NUMBER_NAMES.sort( (a,b) => a - b)
// // console.log(cool)

// function sumOfDigits (input) {
//     let inStr = String(input);
//     let inArr = inStr.split('');
//     console.log(inArr)
//     let inSum = inArr.reduce((a,b) => Number(a) + Number(b));
//     console.log(inSum)
//     return inSum
// }

// sumOfDigits(496)
// function multPairs(array1,array2){
//   let resultArr = [];
//   for(let i = 0; i < array1.length; i++){
//     for(let j = 0; j < array2.length; j++){
//       resultArr.push(array1[i]*array2[j]);
//     }
//   }
//   sortedResult = resultArr.sort((a,b)=> a-b);
//   console.log(sortedResult)
// }

// multPairs([2,4],[4,3,2,1])




// function leadString (input) {
//   let inString = input;
//   subStrArr = [];
//   for(let i = 1; i <= inString.length; i++) {
//     let sub = inString.slice(0,[i]);
//     subStrArr.push(sub)
//   }
//   console.log(subStrArr)
// }

// leadString('abc')

// function allSubStrings (input) {
//   let inString = input;
//   let subStrArr = [];
//   for(let j = 0; j <= inString.length; j++){
//     for(let i = 1; i <= inString.length; i++) {
//       let sub = inString.slice(j,i);
//       if(sub){
//         subStrArr.push(sub)
//       }
//     }
//   }
//   console.log(subStrArr)
// }

// allSubStrings('abcde')

// function palindromeSubstring (input) {
//   let inString = input;
//   let subStrArr = [];
//   for(let j = 0; j <= inString.length; j++) {
//     for(let i = 1; i <= inString.length; i++) {
//       let sub = inString.slice(j,i);
//       if(sub){
//         subStrArr.push(sub)
//       }
//     }
//   }
//   console.log(subStrArr)
// }


// palindromeSubstring('abcde');

// function sumSums (input) {
//   let inArray = input;
//   let total = 0
//   for(i=1; i <= inArray.length; i++) {
//     let subSeq = inArray.slice(0,i);
//     console.log(subSeq)
//     let sumSubSeq = subSeq.reduce( (accum,curr) => accum + curr);
//     total += sumSubSeq
//   }
//   console.log(total)
// }

// sumSums([1,5,7,3])

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



// function groceryList (input) {
//   inArr = input;
//   resultArr = [];
//   for (let i = 0; i < inArr.length; i++) {
//     el = inArr[i]
//     fruit = el[0]
//     multiple = el[1]
//     for(let j = 0; j < multiple; j++) {
//       resultArr.push(fruit)
//     }
//   }
//   console.log(resultArr)
// }

// groceryList([['apple', 3], ['orange', 1], ['banana', 2]])



// let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
//                      { id: 105, movement: 'in',  quantity: 10 },
//                      { id: 102, movement: 'out', quantity: 17 },
//                      { id: 101, movement: 'in',  quantity: 12 },
//                      { id: 103, movement: 'out', quantity: 20 },
//                      { id: 102, movement: 'out', quantity: 15 },
//                      { id: 105, movement: 'in',  quantity: 25 },
//                      { id: 101, movement: 'out', quantity: 18 },
//                      { id: 102, movement: 'in',  quantity: 22 },
//                      { id: 103, movement: 'out', quantity: 15 }, ];

// function transactionsFor(idNumber, inArr) {
//     let cool = inArr.filter(elementObj => elementObj.id === idNumber)
//     console.log(cool)
// }

// transactionsFor(101, transactions);


let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

function isItemAvailable (id, list) {
  let filteredArray = transactionsFor(id,list);
  function transactionsFor(idNumber, inArr) {
    let cool = inArr.filter(elementObj => elementObj.id === idNumber)
    return cool
    }
  let total = 0;
  for (let i = 0; i < filteredArray.length; i++) {
    if (filteredArray[i].movement === 'in') {
      total += filteredArray[i].quantity
    } else { total -= filteredArray[i].quantity}
  }
  if(total > 0){console.log(true)} else {console.log(false)}
}

isItemAvailable(101,transactions);
isItemAvailable(103, transactions);     
isItemAvailable(105, transactions); 
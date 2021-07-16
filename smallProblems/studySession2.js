// /*

// Problem Description
// You are given an array of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Example: 

// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)
// // "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

// Test Cases


// */

// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta"); // true
// console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh"); // true
// console.log(longestConsec([], 3) === ""); // true
// console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"); // true
// console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu"); // true
// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); // true
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz"); // true
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); // true
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""); // true


// Problem Description
// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

// For example:
// Let's say you are given the array [1, 2, 3, 4, 3, 2, 1]:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index [1, 2, 3] and the sum of the right side of the index [3, 2, 1] both equal 6.

// Another one:
// You are given the array [20, 10, -80, 10, 10, 15, 35]
// At index 0 the left side is []
// The right side is [10, -80, 10, 10, 15, 35]
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.

// Test Cases
// console.log(findEvenIndex([1,2,3,4,3,2,1]) === 3); // true
// console.log(findEvenIndex([1,100,50,-51,1,1]) === 1); // true
// console.log(findEvenIndex([1,2,3,4,5,6]) === -1); // true
// console.log(findEvenIndex([20,10,30,10,10,15,35]) === 3); // true
// console.log(findEvenIndex([20,10,-80,10,10,15,35]) === 0); // true
// console.log(findEvenIndex([10,-80,10,10,15,35,20]) === 6); // true
// console.log(findEvenIndex([-1,-2,-3,-4,-3,-2,-1]) === 3); // true

console.log([])


/*
Problem Description
You are given an array of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Example: 

longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)
// "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

Test Cases


PSUEDOCODE:

1. Declare a variable that will hold the largest consecutive string `largestConsecutiveString`
2. Loop over the strings in the input array. Combine the current string with the next items in the array up to `k` items
3. if the concatenation done on line 2 is largest than the `largestConsecutiveString`
    -> reassign `largestConsecutiveString` to the result of line 2.
4. After all the items have been processed return the `largestConsecutiveString`.

Guard Clauses:

1. if n = 0 or k > n or k <= 0 return ""



*/


TYLER ANSWER
// function longestConsec(array, k) {
//   if (array.length === 0 || k > array.length) return "";

//   let largestConsecutiveString = "";
//   for (let idx = 0; idx < array.length; idx += 1) {
//       let tempString = array[idx];
//       for (let idy = 1; idy < k ; idy += 1) {
//           if (array[idx + idy]) {
//               tempString += array[idx + idy];
//           } else {
//               break;
//           }
//       }
//       if (tempString.length > largestConsecutiveString.length) {
//           largestConsecutiveString = tempString;
//       }
//   }
//   return largestConsecutiveString;

// }



// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta"); // true
// console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh"); // true
// console.log(longestConsec([], 3) === ""); // true
// console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"); // true
// console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu"); // true
// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); // true
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz"); // true
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); // true
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""); // true



// ANDY:
// Guard Clauses:

// 1. if n = 0 or k > n or k <= 0 return ""

// Algorithm :
// - check if array length is smaller than n or n is smaller than 0
//   - if true, return an empty string
// - declare a variable newArr, initialize it to an empty array
// - find all the string combinations with the length of n
//   - declare a variable chunk, intialize it to the value of n consecutive elements of input array joined as a string
//   - add chunk to newArr
// - sort newArr in a descending order by its length
// - return the first element of newArr



// */



// function longestConsec(array, n) {
//   if (array.length < n || n < 0) {
//     return "";
//   }
//   let newArr = [];
//   for (let index = 0; index <= array.length - n; index += 1) {
//       let chunk = array.slice(index, index + n).join("");
//       newArr.push(chunk);
//   }
//   newArr.sort((a, b) => b.length - a.length);
//   return newArr[0];
// }





// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta"); // true
// console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh"); // true
// console.log(longestConsec([], 3) === ""); // true
// console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"); // true
// console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu"); // true
// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); // true
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz"); // true
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); // true
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""); // true

SERGIO:

// const findEvenIndex = (numbers) => {
//   let leftSum = {};

//   let leftTotal = 0;
//   for (let idx = 0; idx < numbers.length; idx += 1) {
//     leftTotal += numbers[idx];
//     leftSum[idx] = leftTotal;
//   }

//   let rightTotal = 0;
//   for (let idx = numbers.length-1; idx >= 0; idx -= 1) {
//     rightTotal += numbers[idx];
//     if (leftSum[idx] === rightTotal) {
//       return idx;
//     }
//   }

//   return -1;
// }


// console.log(findEvenIndex([1,2,3,4,3,2,1]) === 3); // true
// console.log(findEvenIndex([1,100,50,-51,1,1]) === 1); // true
// console.log(findEvenIndex([1,2,3,4,5,6]) === -1); // true
// console.log(findEvenIndex([20,10,30,10,10,15,35]) === 3); // true
// console.log(findEvenIndex([20,10,-80,10,10,15,35]) === 0); // true
// console.log(findEvenIndex([10,-80,10,10,15,35,20]) === 6); // true
// console.log(findEvenIndex([-1,-2,-3,-4,-3,-2,-1]) === 3); // true

TYLER:

// function findEvenIndex (array) {
//   let sum = 0

//   for (let idx = 0; idx < array.length; idx += 1) {
//       if (sum === getSum(array.slice(idx + 1))) {
//           return idx;
//       }
//       sum += array[idx];
//   }
//   return -1;
// }


// function getSum(array) {
//   return array.reduce((accum, val) => accum + val, 0);
// }

ANDY:
/*
Algorithm :
- iterate array
  - declarea a variable leftSum, initialize it to the sum of array with elements starting from 0 to index
  - declare a variable rightSum, initialize it to the sum of array with elements starting from index + 1 to the last element
  - compare leftSum and rightSum if they are equal 
    - if true, return index
- if iteration finishes without returning, return -1
*/
function findEvenIndex(array) {
  for (let index = 0; index < array.length; index += 1) {
    let leftSum = array.slice(0, index).reduce((acc, ele) => acc + ele, 0);
    let rightSum = array.slice(index + 1).reduce((acc, ele) => acc + ele, 0);
    if (leftSum === rightSum) {
      return index;
    }
  }
  return -1;
}


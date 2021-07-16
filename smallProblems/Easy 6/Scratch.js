// function doubler (inputStr) {
//   let charArr = inputStr.split('');
//   let resultArr = charArr.map( charElement => charElement.repeat(2));
//   console.log(resultArr.join(''));
//   return resultArr.join('')
// }

// doubler('Good Job!')
// doubler('')

// function noVowelDoubler (inputStr) {
//   let charArr = inputStr.split('');
//   let noDoubleCharacters = "AEIOUaeiou\\^-'";
//   let resultArr = [];
//   for (let i = 0; i < charArr.length; i++) {
//     if (noDoubleCharacters.includes(charArr[i])) { 
//       resultArr.push(charArr[i]);
//     } else { resultArr.push(charArr[i].repeat(2)) }
//   }
//   console.log(resultArr.join(''));
//   return resultArr.join('');
// }

// noVowelDoubler('Hello-World!')
// noVowelDoubler('July 4th')
// noVowelDoubler('July \\dfdf / df\\ 4th')

// function reverseNumber(inputNum) {
//   let strNum = String(inputNum);
//   let reverseStrNum = strNum.split('').reverse().join('');
//   let reverseNum = Number(reverseStrNum);
//   console.log(reverseNum)
//   return reverseNum
// }

// reverseNumber(12345);    // 54321
// reverseNumber(12213);    // 31221
// reverseNumber(456);      // 654
// reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
// reverseNumber(1);        // 1

// function centerOf (inputStr) {
//   if(!isEven(inputStr)) {
//     let oddMidChar = Math.floor(inputStr.length / 2);
//     console.log(inputStr.charAt(oddMidChar));
//     return inputStr.charAt(oddMidChar);
//   } else {
//     let evenLo = (inputStr.length / 2) - 1;
//     let evenHi = inputStr.length / 2;
//     console.log(inputStr.charAt(evenLo) + inputStr.charAt(evenHi))
//     return inputStr.charAt(evenLo) + inputStr.charAt(evenHi)
//   }

//   function isEven (inputStr) {
//     console.log(inputStr.length % 2 === 0);
//     return inputStr.length % 2 === 0;
//   }
// }

// centerOf('I Love JavaScript'); // "a"
// centerOf('Launch School');     // " "
// centerOf('Launch');            // "un"
// centerOf('Launchschool');      // "hs"
// centerOf('x');                 // "x"

// function negative (input) {
//   if(input < 0) { console.log(input)}
//   if(input >= 0) { console.log(-1*input)}
// }

// negative(5);     // -5
// negative(-3);    // -3
// negative(0);     // -0


// function sequence (inCount,inStart) {
//   let resultArr = [];
//   for (i = 1; i <= inCount; i++) {
//     resultArr.push(inStart * i);
//   }
//   console.log(resultArr);
//   return resultArr;
// }
// sequence(5, 1);          // [1, 2, 3, 4, 5]
// sequence(4, -7);         // [-7, -14, -21, -28]
// sequence(3, 0);          // [0, 0, 0]
// sequence(0, 1000000);    // []


// function reverseWords (inputStr) {
//   let resultArr = [];
//   let inStrArr = inputStr.split(' ');
//   for (let i =  0; i < inStrArr.length; i++) {
//     if (fivePlus(inStrArr[i])) {
//       resultArr.push(inStrArr[i].split('').reverse().join(''));
//     } else {resultArr.push(inStrArr[i])}
//   }
//   function fivePlus (element) {
//     return element.length >= 5;
//   }
//   console.log(resultArr.join(' '));
//   return resultArr.join(' ');
// }

// reverseWords('Professional');             // "lanoisseforP"
// reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
// reverseWords('Launch School');

function reverse(inArr) {
  for(let i = 0; i < inArr.length; i++){
    let outEl = inArr.pop()
    inArr[i] = outEl;
    console.log(inArr)
  }
  console.log(inArr)
}

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

// let list1 = ["a", "b", "c", "d", "e"];
// let result1 = reverse(list1);
// console.log(result1); // logs  ["e", "d", "c", "b", "a"]
// console.log(list1 === result1); // logs true

// let list2 = ["abc"];
// let result2 = reverse(list2);
// console.log(result2); // logs  ["abc"]
// console.log(list2 === result2); // logs true

// let list3 = [];
// let result3 = reverse(list3);
// console.log(result3); // logs []
// console.log(list3 === result3); // logs true
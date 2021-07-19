/*
input 
  string 
output 
  string (each wordElement: word[0] SWAP w word[length-1])
REQUIRED:
  at least 1 word in inputString
  case-Insensitive
EXAMPLE
('oh hi') >> ('ho ih')

Algo 
  Set inputString
  Set resultString
  CONVERT inputString to wordArray
    .split(' ')
  LOOP
    < wordArray.length
    Let wordElement = wordArray[i] 
    Conditional:
      if wordElement.length = 1: no change
      if length 2: reverse
      else length >=3: str[length-1]+str.slice(1,length-1)+str[0]
*/

function swap(inputString) {
  let wordArray = inputString.split(' ');
  let resultString = '';
  let whitespace = ' ';

  for (let i = 0; i < wordArray.length; i++) {
    let wordElement = wordArray[i]
    if (wordArray[i].length <= 1) {
      resultString += wordElement + whitespace;
    } else if (wordArray[i].length <= 2) {
      resultString += wordElement[1] + wordElement[0] + whitespace;
    } else {
      resultString += wordElement[wordElement.length - 1] + wordElement.slice(1,-1) + wordElement[0] + whitespace;
      console.log(wordElement);
    }
  }
  console.log(resultString);
}

swap('Oh what a wonderful day it is');
// The basic logic to solve the problem is LOOP adding Zeroes w x10
// First loop is 0, stores the first element
// Second loop is first element x10, plus second element.

// Additional takeaway is the use of Object conversion
// Not used in example11 but obj Keys are defined as strings
// Then just access their paired values

// Finally, forEach is a better choice than reusing .map() bc 
// a new Array is not needed, just update placeHolder value

let stringExample = '-12345678';
let CONVERSION = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
};

function signCheck(string) {
  if(string[0] === '-') {
    let cleanString = string.substring(1);
    return cleanString;
  } else if (string[0] === '+') {
    let cleanString = string.substring(1);
    return cleanString;
  } else {
    let cleanString = string;
    return cleanString;
  }
}

function buildNumber (array) {
  let placeHolder = 0;
  array.forEach(element => (placeHolder = (10 * placeHolder) +  element));
  return placeHolder;
}

function signedStringToInteger(string) {
  let cleanString = signCheck(string);
  let stringArray = cleanString.split('').map(char => CONVERSION[char]);
  let unSigned = buildNumber(stringArray);
  if (string[0] === '-') {
    console.log(-1 * unSigned);
  } else {console.log(unSigned)}
}

signedStringToInteger(stringExample);
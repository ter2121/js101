// String to Number

// For each stringElement in array, map onto numberElement in array
// For each numberElement in array, build a multi character Number
// '1234' << ['1','2','3','4'] << [1,2,3,4] << 1234
// 

let stringExample = '12345678'
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
}

function buildNumber (array) {
  let placeHolder = 0
  array.forEach(element => (placeHolder = (10 * placeHolder) +  element))
  return placeHolder
}

function stringToInteger(string) {
  let stringArray = string.split('').map(char => CONVERSION[char])
  console.log(buildNumber(stringArray));
}

stringToInteger(stringExample)
// ## For strings, just use += operator to increment
// ## 


let integer = 10
let binaryString = '';

function stringy () {
  for (let i = 0; i <= integer; i++) {
    if (i % 2 === 0) {
      binaryString += '1';
    } else binaryString += '0';
  }
  console.log(binaryString);
  binaryString = ''
}

stringy(integer)
// stringy(9)
// stringy(4)
// stringy(7)
// stringy(1)


// REQUIRES:
// Input is a pos. integer posInt
// desired string length === posInt 
// Return binaryString that starts with 1

// p Input   
//   Number integer
//   Output
//   String 1010
// E 1,2 
// T 
// A 
//   if binaryString.length = 1  1 
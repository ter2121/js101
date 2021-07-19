let readlineSync = require('readline-sync');
let unit = readlineSync.question("Meters or Feet \n").toLowerCase()
let length = parseInt(readlineSync.question("What is the length \n"))
let width = parseInt(readlineSync.question("What is the width \n"))
const FEET = 10.7639

function roomArea (length, width) {
  area = length * width
  console.log(unit)
  if (unit === 'feet') {
    console.log(`The area of the room is ${area} square feet`)
  } else if (unit === 'meters') {
    console.log(`The area of the room is ${area} square meters`)
  }
}

roomArea(length, width)
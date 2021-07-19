// requires:
// Current Year
// Retirement Year
// Range Sentence 

// input integer 
// output String, integer (3)

// algorithm/DataSt 
// ints 
// retireAge-currentAge = rangeAge

// ## Didn't use () on getFullYear first time, which caused "native code" errors


let rlSync = require('readline-sync');
let answerCurrentAge = rlSync.question("What is your current age")
let answerRetireAge = rlSync.question("What is your desired retirement age")
let date = new Date()
let thisYear = date.getFullYear()
let range = answerRetireAge - answerCurrentAge

console.log(`It's ${thisYear}. You will retire in ${range + thisYear}. You only have ${range} years of work to go!`)

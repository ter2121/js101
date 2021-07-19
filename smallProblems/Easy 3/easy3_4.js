// Required: 
// Index of 1 for first Fib Number
// Count digits 
// Assume >= 2

// p 
// input number of digits argument
// output first fib number to match that number 
// e 

// t num 
// a 

  
function fibMaker (length) {
  let num = [1,1]
  for (let i = 0; i < length; i++) {
    numPush = num[i+1] + num[i]
    num.push(numPush)
  }
  console.log(num)
}

fibMaker(100)
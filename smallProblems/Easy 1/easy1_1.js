function isOdd (int) {
  let result = Math.abs(int)
  if ((result % 2) === 0) {
    console.log('False')
  } else {console.log('True')}
}

isOdd(20)
isOdd(-5)
isOdd(0)

// P
//   input 1 integer
//   output true if abs value is odd 
// E
//   need 0, neg 
// D
//   1 primitive
// A
//   Math.abs() method
    // int % != 0
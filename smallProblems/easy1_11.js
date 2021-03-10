function asciiValue(string) {
  let charArray = []
  for (let i = 0; i <= string.length - 1; i++) {
    charArray.push(string.charCodeAt(i))
  }
  let answer = charArray.reduce((a,b) => a+b,0)
  console.log(answer)
}

asciiValue('Four score')

// p 
//   input
//     string 
//   output 
//     number sum of ASCII values 
// e
//   empty string
//   number 
// d 
//   string 
//   New Array 
// a 
//   loop over string 
//     push charAt value to new array 
//   sum array elements 
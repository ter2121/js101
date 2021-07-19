
function multisum (number) {
  let multiplesArray = []
  for (let i=1; i <= number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiplesArray.push(i)
      console.log(multiplesArray)
    }  
  } 
  let answer = multiplesArray.reduce((a,b) => a + b, 0)
  console.log(answer)
}

multisum(3)
multisum(5)
multisum(10)
multisum(1000)



// p
//   input integer > 1
//   output sum of 1:n && n % 3 || n % 5
// e 
// d 
//   array
// a 
//   loop 1->n 
//   let new array = array.filter (n % 3 === 0 || n % 5 === 0)
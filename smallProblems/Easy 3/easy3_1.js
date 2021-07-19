// p 
//   input 
//     String argument 
//   output 
//     String, no repeat char 
// e 
//   empty string 
// t 
//   '4abcabcba' << [4,4,4,4,a,b,c,a,b,c,c,b,a] << '4444abcabccba'
// a 
//   split('')

// Can do this w/o array conversion as it's string >> string
// #### The trick is using += operator with 2 strings!
  
function crunch(stringInput) {
  let fun = stringInput.split('')
  let shortFun = []
  for(let i=0; i < fun.length; i++) {
    if(fun[i] != fun[i+1]){
      shortFun.push(fun[i])
    }
  }
  console.log(shortFun.join(''))
} 

crunch("44444abcabccba")
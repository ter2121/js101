// REQUIRE 
// integer.length%2 = 0
// ifNOTEVEN x 2
// ifEVEN 
//   divide into 2 parts by length 
//   compare str1 & str2


// input integer
// output 2*integer or integer
// experiment
// 0
// -1

// alg 

function twice(integer) {
  lengthInteger = String(integer).length
  stringInteger = String(integer)
  str1 = stringInteger.slice(0,lengthInteger/2);
  str2 = stringInteger.slice(lengthInteger/2);
  console.log(str1,str2)
  if (lengthInteger % 2 === 0 && str1 === str2) {
    console.log(integer)
  } else console.log(2*integer)
  console.log(typeof(integer))

}

twice(17171717)
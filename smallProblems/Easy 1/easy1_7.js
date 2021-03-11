let readlineSync = require('readline-sync');
let string1 = String(readlineSync.question("Input a string \n"));
let string2 = String(readlineSync.question("Input another string \n"));

function shortLongShort (string1, string2) {
  let answer = string1.length < string2.length ? string1 + string2 + string1 : string2 + string1 + string2;
  console.log(answer)
}

shortLongShort('abc','defgh')
shortLongShort('abcde','fgh')
shortLongShort('','xyz')
shortLongShort(string1,string2)



// p 
//   input string 1 string 2 
//   output SHORT + LONG + SHORT 
// e 
//   cat tree cat 
//   number 
    //  empty string 
// d 
//   strings

// a 
//   String()
//   string.length 
//   if string 1 < string 2
//         string 1 + 2 + 1
//     (else) string 2 + 1 + 2
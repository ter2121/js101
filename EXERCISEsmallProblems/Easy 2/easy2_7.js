//Exclusive Or


function xor (value1, value2) {
  if ((!!value1 && !value2) || (!value1 && !!value2)) {
    // return true;
    console.log(true)
  } else {
    // return false;
    console.log(false)
  }
}

xor(null,(12/0))





/*
p 
 input 
  value 1, value 2 
 output
  true || false 
e 

t 
  number, boolean, int, undefined, null
a 
  IF value 1 truthy && value 2 falsy OR value 1 falsy && value 2 truthy === true
  ELSE === false
*/
let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

/*
Given the following data structure, use the map method to return a new array identical in structure to the original but, with each number incremented by 1. Do not modify the original data structure.

input: ARRAY: of objects
output: NEW ARRAY: identical, each element +1
REQUIRE: do not modify arr

algorithm:
Create new 
Access array element (subObj)
Access each subObj value
Addition operation on value
Return new object
Place all new objects in new array

*/

arr.map( elObj => {
  let arrPlus = {};

  for(let key in elObj) {
    arrPlus[key] =  elObj[key] + 1;
  }

  console.log(arrPlus);
});

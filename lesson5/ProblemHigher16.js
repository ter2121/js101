let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

/*
Given the following data structure, write some code that returns an object where the key is the first item in each subarray, and the value is the second.

Data Structure:
  input: ARRAY >> 4 element subArrayOut >> 2 element subArrayIn (string, xType)
  output: OBJECT >> key from subArrayIn el1 : value from subArrayIn el2

Required:

Algorithm:
  - declare resultObj
  - LOOP over arr
    - LOOP over subArrayIn
      - assign resultObj[subArrayIn[0]] = subArrayIn[1]
  - return resultObj
*/

let resultObj = {}

arr.forEach( subArrayOut =>
  subArrayOut.forEach( subArrayIn =>
    resultObj[subArrayOut[0]] = subArrayIn
  )
)

console.log(resultObj)


// BETTER SOLUTION, just one forEach
/*
let obj = {};
arr.forEach(subarray => {
  let key = subarray[0];
  let value = subarray[1];

  obj[key] = value;
});

obj; // { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }
*/
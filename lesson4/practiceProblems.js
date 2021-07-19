// got #1 (all truthy so [1,2,3])
// also got #2 as all undefined as no return statement in arrow expression
// got 3 too
// #4 I missed
    // CHAINED METHODS - - they refer to the RETURN VALUE of what they are chained to, not the original value

// #7 When a function doesn't explicitly return something, it implicitly returns undefined. That's why we see undefined as the first element of the returned array.
    // interesting to note that undef and a number are returned in a new array, undef b/c the first element doesn't meet the if condition for a return value

/* #8

input Array
output object 
REQUIRED
  returnObject [KEY(arrayElementName) Value(arrayIndex)]

ALGO
  set inputArray
  set returnObject
  LOOP
    < inputArray.length
    Assign returnObject value = inputArray.indexAt(i)
    Assign returnObject key = inputArray[i]
    


let inputArray = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let returnObject = {}

for (let i = 0; i < inputArray.length; i++) {
  returnObject[i] = inputArray[i]
  }
console.log(returnObject)
*/
// COPY OUT INTO JS BOOK//

let inputObject = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

// I WAS HAVING TROUBLE ADDING AN INITIAL VALUE B?C I DIDN"T SKIP A LINE AND ADD BRACKETS (tried to do it all on 1 line)
console.log(Object.values(inputObject).reduce((a,b) => {
  return a + b
}, 0))


//#10
USING SPREAD SYNTAX:
> let ages = {
  ...   Herman: 32,
  ...   Lily: 30,
  ...   Grandpa: 5843,
  ...   Eddie: 10,
  ...   Marilyn: 22,
  ...   Spot: 237
  ... };
  undefined
  > values = Object.values(ages)
  [ 32, 30, 5843, 10, 22, 237 ]
  > Math.min(...values)
  10
  
  https://stackoverflow.com/questions/8934877/obtain-smallest-value-from-array-in-javascript

  https://codeburst.io/learn-understand-javascripts-reduce-function-b2b0406efbdc

  https://www.freecodecamp.org/news/reduce-f47a7da511a9/

  REREAD #11
  https://launchschool.com/lessons/60e10aa5/assignments/d4f91ca2



  
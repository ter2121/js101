let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

/*
Data Structure:
  input: arr of subObj >> key: subArray
  output: ARRAY >> objects w ALL EVEN numbers

TEST:
  [[2,4,6], [3,6], [4]]
Algorithm:
  - LOOP over arr to access each subObj
    - LOOP over subObj values (each value a subArray)
      - LOOP over subArray to check each elNumber
        - if subArray includes elNumber % 2 === 1 
          return false
        - else
          return true
    - 
*/

let resultArray = arr.filter( subObj => {
  return Object.values(subObj).every( subArray => 
    subArray.every( numEl => numEl % 2 === 0)
    );
  })

  console.log(resultArray)